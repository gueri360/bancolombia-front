migrate((db) => {
  const collection = new Collection({
    "id": "j5w9sdfrcguqe98",
    "created": "2023-07-06 01:48:06.379Z",
    "updated": "2023-07-06 01:48:06.379Z",
    "name": "doer_abilities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zbvu2ixp",
        "name": "user",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "d1b3gck9",
        "name": "rate",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98");

  return dao.deleteCollection(collection);
})
