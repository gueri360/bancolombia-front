migrate((db) => {
  const collection = new Collection({
    "id": "8jg99aucytilokj",
    "created": "2023-07-05 17:12:20.306Z",
    "updated": "2023-07-05 17:12:20.306Z",
    "name": "user_app",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6mhdazlm",
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
        "id": "3o1xgvzv",
        "name": "lastName",
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
        "id": "9capiwsl",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "2ilfjfbv",
        "name": "password",
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
        "id": "w0w7z3fm",
        "name": "userId",
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
        "id": "byqbcfmz",
        "name": "idType",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "CC",
            "PASSPORT"
          ]
        }
      },
      {
        "system": false,
        "id": "bry3iww3",
        "name": "birthDate",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "i6ktvtvx",
        "name": "userType",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "DOER",
            "CLIENT"
          ]
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
  const collection = dao.findCollectionByNameOrId("8jg99aucytilokj");

  return dao.deleteCollection(collection);
})
