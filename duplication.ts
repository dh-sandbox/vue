    addTransitionClass(el, startClass)
    addTransitionClass(el, activeClass)
    nextFrame(
() =>
 {
      removeTransitionClass(el, startClass)
      
// @ts-expect-error

      
if
 (!cb.cancelled) {
        addTransitionClass(el, toClass)
        
if
 (!userWantsControl) {
          
if
 (isValidDuration(explicitEnterDuration)) {
            
setTimeout
(cb, explicitEnterDuration)


     if (expectsCSS) {
    addTransitionClass(el, startClass)
    addTransitionClass(el, activeClass)
    nextFrame(() => {
      removeTransitionClass(el, startClass)
      // @ts-expect-error
      if (!cb.cancelled) {
        addTransitionClass(el, toClass)
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration)
          } else {
            whenTransitionEnds(el, type, cb)
          }
        }
      }
    })
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay()
