migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmsvntzs",
    "name": "abilitie",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vt53ad7d0t7isi7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // remove
  collection.schema.removeField("qmsvntzs")

  return dao.saveCollection(collection)
})
