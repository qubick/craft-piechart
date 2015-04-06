function main() {
        
    var angle = 60
        ,iter = 360/angle
            
    var pie = cylinder({r:20, h:3})
        ,block = cube([20,20,3])

    for(var i=0; i<iter-1; i++){
        block = block.rotateZ(angle)
        
        pie = difference(
                pie,
                block
            )
    }
    //rotate cube as angle
    //subtract iterator times
            
    return pie;
}