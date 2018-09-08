/***
 *
 * Title:          create-rc.js
 * Date Created:   09-01-2018 10:51 PM
 * GitHub Issue #: _GITHUB_ISSUE_NUM
 * Description:    Create a folder and  all files needed to create a react component.
 *
 **/

const fs = require('fs')

const BASE_PATH           = __dirname
const FILE_OPTIONS        = { encoding: 'utf8' }

/* IMPORTANT PATHS */
const COMPONENT_DIRECTORY = `${BASE_PATH}/../src/components`
const CONTAINER_DIRECTORY = `${BASE_PATH}/../src/containers`

/* TEMPLATES USED TO GENERATE FILES  */
const COMPONENT_TEMPLATE  = `${BASE_PATH}/templates/component.template.js`
const CSS_TEMPLATE        = `${BASE_PATH}/templates/css.template.js`
const TEST_TEMPLATE       = `${BASE_PATH}/templates/test.template.js`
const TEMPLATES           = [COMPONENT_TEMPLATE, CSS_TEMPLATE, TEST_TEMPLATE]

/**
 * Search the relative directory to find the given path.
 * If the path given is found, then it outputs a message and will do nothing.
 * Else, a new directory will be made and files will be created inside it.
 *
 * @param {string} name     - For example 'coolComponentName'
 * @param {string} path     - For example '/my/path'
 * @param {string} issueNum - For example '1A23B4'
 */
const findOrCreate = (name, path) => {
  try {
    fs.accessSync(path)
    console.log(`PATH: ${path} already exist.`)
    return
  } catch (err) {
    fs.mkdirSync(path)
    TEMPLATES.forEach( (tempPath, i) =>  {
      let temp = fs.readFileSync(tempPath, FILE_OPTIONS)
          temp = temp.replace(/\b_COMPONENT\b/gi,  `${name[0].toUpperCase() + name.substr(1)}`)
                    .replace(/\b_TITLE\b/gi,        name                                      )
                    .replace(/\b_DATE_CREATED\b/gi, new Date().toLocaleString()               )
      i === 0 && fs.writeFileSync(`${path + '/' + name}.js`,      temp, FILE_OPTIONS)
      i === 1 && fs.writeFileSync(`${path + '/' + name}.css`,     temp, FILE_OPTIONS)
      i === 2 && fs.writeFileSync(`${path + '/' + name}.test.js`, temp, FILE_OPTIONS)
    })
    console.log(`Files created inside PATH: ${path}`)
  }
}

/* SCRIPT LOGIC */
if(process.argv.length >= 4 && process.argv.indexOf('--name') != -1){
  const name              = process.argv[process.argv.indexOf('--name') + 1]
  // const issueNum          = (process.argv.indexOf('--issueNum') != -1) ?
  //                           process.argv[process.argv.indexOf('--issueNum') + 1] : ''
  const isCreateContainer = (process.argv.indexOf('--c') != -1) ? true : false
  const path              = `${isCreateContainer ? CONTAINER_DIRECTORY : COMPONENT_DIRECTORY}/${name}`
  findOrCreate(name, path)
}
