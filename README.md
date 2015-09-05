# generator-lasagnajs

> [Yeoman](http://yeoman.io) generator

## Getting Started

This demo generator allows you to easily create modules and services for the lasagnajs architecture. Scaffolding for the main architecture will eventually be added.

### About this generator

To install generator-lasagnajs from npm, first make sure you have yeoman installed:

```bash
npm install -g yo
```

Then run the following command:

```bash
npm install -g generator-lasagnajs
```

At the moment only subgenerators for modules and services are supported:
 
```bash
yo lasagnajs:module modulename
yo lasagnajs:service servicename
```

If you create a module you will be asked if you want a service as well. If you decide so it will do all the wiring for you.

## License

MIT