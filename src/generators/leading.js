import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ leading }) {
  return _.map(leading, (value, modifier) => {
    return defineClass(`lh-${modifier}`, {
      'line-height': `${value}`,
    })
  })
}
