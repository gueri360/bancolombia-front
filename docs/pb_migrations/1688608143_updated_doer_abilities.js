migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // remove
  collection.schema.removeField("an20eenb")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "an20eenb",
    "name": "abilities",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vt53ad7d0t7isi7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
