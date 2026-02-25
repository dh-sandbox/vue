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
