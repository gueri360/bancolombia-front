migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dgp5f2ohhm2bbxy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xxlmtv4k",
    "name": "notified",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dgp5f2ohhm2bbxy")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xxlmtv4k",
    "name": "acceptance",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
