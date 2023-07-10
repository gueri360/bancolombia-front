migrate((db) => {
  const collection = new Collection({
    "id": "vt53ad7d0t7isi7",
    "created": "2023-07-06 01:44:16.937Z",
    "updated": "2023-07-06 01:44:16.937Z",
    "name": "abilities",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pdjk7vb3",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tdzz77s8",
        "name": "price",
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
        "id": "f5r0kbzm",
        "name": "distance",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("vt53ad7d0t7isi7");

  return dao.deleteCollection(collection);
})
