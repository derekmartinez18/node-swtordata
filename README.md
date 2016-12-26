## SwtorData API Wrapper ##

**Designed for version 2.2**  

```
let swtor = require('swtordata');
let SWTOR = new swtor("api-key", {});
```

`getById` works with all endpoints that only take an id, simply specify the endpoint, the id, and your function. This is an example for Senya's Lightsaber Pike and the items endpoint, it's the same as `/v2_2/items/93486`.
```
SWTOR.getById('items', 93486, function(error, item) {
    console.log(item);
});
```

This example searches the items for `"Senya's"`, selects the first result, and then performs a new query for that item.
```
SWTOR.getItems({
	query: "Senya's"
}, function (error, result) {
	let id = result.objects[0].id;
	SWTOR.getById('items', id, function (error, item) {
		console.log(item);
	});
});
```

Per API requirement only the `query` parameter is required, but the optional ones are supported by the wrapper. This will get a list of Artifice craftable crystals.
```
SWTOR.getCraftings({
    query: 'Crystal',
    crafting_profession: 'Artifice'
}, function(error, results) {
    console.log(results);
});
```

You can set global overrides for the optional parameters for `perpage` and `sortorder`. This means all requests made will use this by default. You can of course override this by specifying it within the request itself. You can also entirely ignore this and it'll use API defaults.
```
let swtor = require('swtordata');
let SWTOR = new swtor("api-key", {
    perpage: 10
});

SWTOR.getItems({
	query: '...',
	perpage: 15 // this will override default
}, ...);
```