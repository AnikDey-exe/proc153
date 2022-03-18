AFRAME.registerComponent('car', {
    schema: {
        rotationX: {type: 'number', default: 0},
        rotationY: {type: 'number', default: 0},
        rotationZ: {type: 'number', default: 0},
        positionX: {type: 'number', default: 0},
        positionY: {type: 'number', default: 0},
        positionZ: {type: 'number', default: 0}
    },
    init: function() {
        this.el.setAttribute('rotation', {
            x: this.data.rotationX,
            y: this.data.rotationY,
            z: this.data.rotationZ
        });

        this.el.setAttribute('position', {
            x: this.data.positionX,
            y: this.data.positionY,
            z: this.data.positionZ
        });
    }
})