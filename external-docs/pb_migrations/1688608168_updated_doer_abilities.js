migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f2q8sywd",
    "name": "abilities",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98")

  // remove
  collection.schema.removeField("f2q8sywd")

  return dao.saveCollection(collection)
})
