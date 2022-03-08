
import { BufferGeometry, PointsMaterial, Points, Float32BufferAttribute } from 'three'

export class createParticles () {
    constructor {
        this.data = []
        this.vertices = []
    }

    init() {
        const color = 0xFFFFFF
        this.geometry = new BufferGeometry()
        this.material = new PointsMaterial({
          color,
          opacity: 0.5,
          transparent: true,
          size: 0.03
        })
        
        for (let i = 0; i < 100; i++) {
          const pos = Math.random() * Math.PI * 2
          const dist = Math.random() / Math.random() * 1
          this.data.push({
            x: Math.sin(pos) * dist,
            y: Math.cos(pos) * dist,
            z: Math.random() * 6 - 3
          })
        }
      
        this.data.forEach(p => {
          vertices.push(p.x, p.y, p.z + 3)
        })
      
        this.geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))
        this.particles = new Points(geometry, material)            
        return particles
    }

    animate() {
        this.vertices = []
        this.data.forEach(p => {
          const deltaZ = time / 200
          const newPos = (p.z - deltaZ) % 4
          vertices.push(p.x, p.y, newPos + 3)
        })
    
        geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))
    }
}