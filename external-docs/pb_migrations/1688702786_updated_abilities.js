migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vt53ad7d0t7isi7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "im7tmjjj",
    "name": "doerId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "email",
        "name",
        "lastname"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vt53ad7d0t7isi7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "im7tmjjj",
    "name": "doerId",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "name"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
