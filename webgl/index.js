import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    Vector3,
    AmbientLight,
    PointLight,
    AnimationMixer,
    BufferGeometry,
    PointsMaterial,
    Points,
    Float32BufferAttribute,
    Clock,
    AxesHelper,
    GridHelper,
    Fog,
    ShaderMaterial,
    LoadingManager,
    DirectionalLight,
    UniformsLib,
    UniformsUtils,
    CameraHelper
  } from 'three'

import model from '/models/dancing.gltf'
import room from '/models/room.gltf'
import vertex from '/webgl/glsl/vertex.vert'
import fragment from '/webgl/glsl/fragment.frag'
// import createParticles from '/webgl/particles'

  // Remove this if you don't need to load any 3D model
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import Stats from 'stats'
// document.body.appendChild(stats.dom)

export class App {
  constructor(container) {
    this.container = container
    
    this._resizeCb = () => this._onResize()
    // this._mousemoveCb = e => this._onMousemove(e)
  }

  init() {
    this._createScene()
    this._createCamera()
    this._createRenderer()
    this._createControls()
    this._createProps()
    // this._createParticles('#FFFFFF')
    this._loadModel().then(() => {
      this._addListeners()
      this.renderer.setAnimationLoop(() => {
        this.delta = this.clock.getDelta()
        this.time = this.clock.getElapsedTime()
        this._render()       
        this.controls.update()
        this.mixer.update(this.delta)
        // this._animateParticles(this.time)
      })
    })
  }

  destroy() {
    this.renderer.dispose()
    this._removeListeners()
  }

  _render() {
    this.renderer.render(this.scene, this.camera)
  }

  _createScene() {
    this.scene = new Scene()
  }

  _createProps() {
    const ambient = new AmbientLight(0xffffff, 0.5)
    const point = new PointLight(0xffffff, 1, 60, 2)
    const directional = new DirectionalLight(0xffffff, 1)
    const axesHelper = new AxesHelper(5)
    point.position.set(0, 25 , 10)

    point.castShadow = true
    point.shadow.mapSize.width = 2048
    point.shadow.mapSize.height = 2048
    point.shadow.bias = -0.004

    this.scene.add(ambient, point, axesHelper)
    this.scene.fog = new Fog(0x120720, 50, 150)
  }

  _createParticles(color) {
    let material = new PointsMaterial( { 
      color: 0xffffff,
      size: 0.15
    })
    // Speed
    this.xSpeed = 0.0005
    this.ySpeed = 1.25

    // Particles
    this.particleCount = 10
    this.geometry = new BufferGeometry()
    this.data = []
    let vertices = []

    for (let i = 0; i < this.particleCount; i++) {
      this.data.push({
        x: Math.random() * 60 - 30,
        y: Math.random() * 60 - 30,
        z: Math.random() * 60 - 30
      })
    }

    this.data.forEach(p => {
      vertices.push(p.x, p.y, p.z)
    })

    this.geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3))

    this.points = new Points(this.geometry, material)
    this.points.sortParticles = true
    this.scene.add(this.points)
    console.log(this.geometry.attributes.position.array)
  }

  _animateParticles(time) {
    this.geometry.attributes.position.needsUpdate = true
    let positions = this.geometry.attributes.position
    let x, y, z, index
    // x = y = z = index = 0
    
    for (let i = 0, l = this.particleCount; i < l; i++) {
      let currentY = positions.getY(i)
      if (currentY >= 50) {
        positions.setY(i, -20)
      } else {
        let newY = currentY + this.ySpeed
        positions.setY(i, newY)
      }
    }
  }

  _createCamera() {
    this.reference = new Vector3(0, 8.5 , 0)
    this.camera = new PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.001, 1000)
    this.camera.position.set(20, 10, 10)
    // this.camera.lookAt(this.reference)
    // console.log(this.camera.lookAt)
  }

  _createControls() {
    this.controls = new OrbitControls( this.camera, this.renderer.domElement )
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.085

  }

  _createRenderer() {
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio === 1
    })

    this.container.appendChild(this.renderer.domElement)

    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.renderer.setPixelRatio(2)
    this.renderer.shadowMap.enabled = true
  }

  _createAnimations(model) {
    this.clock = new Clock()
    this.mixer = new AnimationMixer(model.scene)
    console.log(model.animations)
    model.animations.forEach((clip) => {
      this.mixer.clipAction(clip).play()
    })
  }

  _loadModel() {
    this.manager = new LoadingManager()
    this.gltfLoader = new GLTFLoader(this.manager)

    return new Promise(resolve => {
      this.gltfLoader.load(model, gltf => {
        this.model = gltf.scene.children[0]
        this.model.scale.set(0.0015, 0.0015, 0.0015)
        this.model.position.set(0,0,-2)
        this._createAnimations(gltf)
        this.model.castShadow = true
        this.model.receiveShadow = true
        this.scene.add(this.model)
        this.mesh = this.model.children[1]
        this.mesh.castShadow = true
        this.mesh.receiveShadow = true
        console.log(this.model)
        
      })
      this.gltfLoader.load(room, gltf => {
        this.room = gltf.scene.children[0]
        this.ground = gltf.scene.children[1]
        this.room.castShadow = true
        this.room.receiveShadow = true
        this.ground.castShadow = true
        this.ground.receiveShadow = true
        this.scene.add(this.room, this.ground)
      })
      this.manager.onLoad = function () {  
        console.log('done')
        resolve()
      }
    })
  }

  _addListeners() {
    window.addEventListener('resize', this._resizeCb, { passive: true })
    // window.addEventListener('mousemove', this._mousemoveCb, { passive: true })
  }

  _removeListeners() {
    window.removeEventListener('resize', this._resizeCb, { passive: true })
    window.removeEventListener('mousemove', this._mousemoveCb, { passive: true })
  }

  _onResize() {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    // this._checkMobile()
  }
}