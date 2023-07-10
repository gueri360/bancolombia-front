migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sze223dj9ofi1jc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kahvo9uy",
    "name": "doerId",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sze223dj9ofi1jc")

  // remove
  collection.schema.removeField("kahvo9uy")

  return dao.saveCollection(collection)
})
