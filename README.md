# Vue 3 colors APP example

This is an example Vue 3 with TypeScript app that consumes a REST API.

## Try it out

First you need to install all the dependencies.

```cli
npm install
```

If you want to test or play with the code and have automatic recompile using webpack-dev-server, you can use:

```cli
npm run dev
```

Now use your favorite browser and surf to the website.

## Sources

The application is built using:

* Bulma CSS Framework: <https://bulma.io/documentation/>
* Axios HTTP Client: <https://github.com/axios/axios>
* ReqRes fake API: <https://reqres.in/>

## Notes

In this application, a component is used inside an `<table>` element. This results in exceptional behavior and is fixed with an `v-is` attribute. More details about this issue can be found at <https://v3.vuejs.org/guide/component-basics.html#dom-template-parsing-caveats>