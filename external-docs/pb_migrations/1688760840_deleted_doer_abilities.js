migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("j5w9sdfrcguqe98");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "j5w9sdfrcguqe98",
    "created": "2023-07-06 01:48:06.379Z",
    "updated": "2023-07-07 04:23:08.472Z",
    "name": "doer_abilities",
    "type": "base",
    "system": false,
    "schema": [
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
        "id": "f2q8sywd",
        "name": "abilities",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
