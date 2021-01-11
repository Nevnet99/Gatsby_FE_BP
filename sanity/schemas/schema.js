// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity
import shoes from './shoes';
import clothing from './clothing';
import accessories from './accessories';
import stock from './stock';

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([shoes, clothing, accessories, stock]),
});
