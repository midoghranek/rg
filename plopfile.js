module.exports = (plop) => {
  function generate(command) {
    plop.setGenerator(command, {
      description: `Create a ${command}`,
      prompts: [
        {
          type: "input",
          name: "name",
          message: `What is your ${command} name?`,
        },
      ],
      actions: [
        {
          type: "add",
          path: `src/${command}s/{{pascalCase name}}/{{pascalCase name}}.js`,
          templateFile: `plop-templates/Component.js.hbs`,
        },
        {
          type: "add",
          path: `src/${command}s/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
        },
      ],
    });
  }

  generate("component");
  generate("container");
  generate("page");
};
