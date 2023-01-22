const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

// find all products, including associated Cateogry and Tag data
router.get("/", (req, res) => {
  Product.findAll({
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
      {
        model: Tag,
        attributes: ["tag_name"],
      },
    ],
  })
    .then((data) => {
      if (!data) {
        res.status(404).json({ message: "No products found!" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one product
router.get("/:id", (req, res) => {
  // find a single product by its `id` including its associated Category and Tag data
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
      {
        model: Tag,
        attributes: ["tag_name"],
      },
    ],
  }).then((data) => {
    if (!data) {
      res.status(404).json({ message: "No products found with this id." });
    }
    res.json(data);
  });
});

// create new product
router.post("/", (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */

  Product.create({
    product_name: req.body.product_name,
    price: req.body.price,
    stock: req.body.stock,
    category_id: req.body.category_id,
    tagIds: [req.body.tag_id],
  })
    .then((data) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tag_id.length > 0) {
        const prodTagsArray = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id: tag_id,
          };
        });
        return ProductTag.bulkCreate(prodTagsArray)
        res.json(data);
      }
      // if no product tags, just respond
      else {
        res.json(data);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update product
router.put("/:id", (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      // find all associated tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .json({ message: "No product data was found with this id" });
        return;
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
