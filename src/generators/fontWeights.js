import _ from 'lodash'
import defineClass from '../util/defineClass'

export default function({ fontWeights }) {
  return _.map(fontWeights, (weight, modifier) => {
    return defineClass(`fw-${modifier}`, {
      'font-weight': `${weight}`,
    })
  })
}
