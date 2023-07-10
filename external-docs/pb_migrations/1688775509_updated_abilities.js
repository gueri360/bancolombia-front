migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sze223dj9ofi1jc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bo5jprhx",
    "name": "description",
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bo5jprhx",
    "name": "descripcion",
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
})
