const testFeature = () => { 
    let a = 0 

    return () => {
        for(let i = 0; i < 3; i++) {
            console.log(a + i)
            a += 1
          }
    }
}
