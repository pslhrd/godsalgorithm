import {
    Scene,
    WebGLRenderer,
    PerspectiveCamera,
    BoxGeometry,
    ShaderMaterial,
    Color,
    Vector2,
    Vector3,
    Raycaster,
    Object3D,
    MathUtils,
    LoadingManager,
    AmbientLight,
    Mesh,
    PlaneGeometry,
    MeshStandardMaterial,
    BoxHelper,
    PointLight,
    Fog
  } from 'three'

import model from '/models/model.gltf'

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
    this._loadModel().then(() => {
      this._addListeners()
      this.renderer.setAnimationLoop(() => {
        // this._update()
        this._render()
        this.controls.update()
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
    const ambient = new AmbientLight(0xffffff, 1)
    const point = new PointLight(0xffffff, 2, 50, 2)
    point.position.set(0, 30 ,0)
    this.scene.add(ambient, point)

    const geometry = new PlaneGeometry(100, 100)
    const material = new MeshStandardMaterial({color:0x101010})
    const plane = new Mesh(geometry, material)
    this.scene.add(plane)
    plane.rotation.x = - Math.PI / 2

  }

  _createCamera() {
    console.log(this.container)
    this.camera = new PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000)
    this.camera.position.set(20, 20, 20)
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
    // this.renderer.physicallyCorrectLights = true
  }

  _loadModel() {
    this.gltfLoader = new GLTFLoader()
    return new Promise(resolve => {
      this.gltfLoader.load(model, gltf => {
        this.model = gltf.scene.children[0]
        this.model.position.set(0,4,0)
        this.model.scale.set(0.05,0.05,0.05)
        this.scene.add(this.model)
        resolve()
      })
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