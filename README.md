# terramod
Generate skeleton terraform module from example in terraform.io docs

## Dependencies
- [NodeJS](https://nodejs.org/en/)
- [cheerio](https://github.com/cheeriojs/cheerio) (terramod will try to install this module itself)

## Instructions
1. Pull this repo
```bash
$ cd ~
$ git clone git@github.com:thepastelsuit/terramod.git
```

2. Symlink to a location in your path
```bash
$ cd ~/bin
$ ln -s ~/terramod/terramod terramod
```

3. Navigate to the root of your terraform project and run
```bash
$ cd ~/my-project
$ terramod <aws resource name>
```

## CLI Arguments
The script takes arguments as such `terramod <aws resource name> <example number from docs>`.

`<aws resource name>` is found at the end of a Terraform doc page before the **.html**, i.e. https://www.terraform.io/docs/providers/aws/r/<b>api_gateway_integration</b>.html

`<example number from docs>` will default to **1** and use the first example found on that doc page. Some resources in the terraform docs have multiple examples, and you can pass a different value to have terramod generate your **main.tf** file from that example instead.
