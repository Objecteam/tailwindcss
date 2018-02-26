import defineClasses from '../util/defineClasses'

export default function() {
  return defineClasses({
    'ta-left': { 'text-align': 'left' },
    'ta-center': { 'text-align': 'center' },
    'ta-right': { 'text-align': 'right' },
    'ta-justify': { 'text-align': 'justify' },
  })
}
