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
  DirectionalLight,
  MeshPhongMaterial,
  BoxGeometry
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/TrackballControls'

export class App(container) {
  constructor {
    this.container = container
    this.sceneElements = []
  }

  init() {

  }

  _createScene(elem) {
    const scene = new Scene()

    const fov = 45
    const aspect = 2 // the canvas default
    const near = 0.1
    const far = 5
    const camera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(0, 1, 2);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const controls = new TrackballControls(camera, elem)
    controls.noZoom = true;
    controls.noPan = true;

    {
      const color = 0xFFFFFF
      const intensity = 1
      const light = new DirectionalLight(color, intensity)
      light.position.set(-1, 2, 4)
      scene.add(light)
    }

    // return {scene, camera, controls}
  }

  _initScene(elem) {
    const {scene, camera, controls} = makeScene(elem)
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new MeshPhongMaterial({color: 'red'})
    const mesh = new Mesh(geometry, material)
    scene.add(mesh)
  }

  _addScene(elem, fn) {
    const ctx = this.container.createElement('canvas').getContext('2d');
    elem.appendChild(ctx.canvas)
    sceneElements.push({elem, ctx, fn})
  }

  _createShop() {
    this.container.querySelectorAll('[data-shop]').forEach((elem) => {
      const sceneRenderFunction = sceneInitFunction(elem)
      addScene(elem, sceneRenderFunction)
    })
  }

  _createRenderer() {
    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: window.devicePixelRatio === 1
    })

    this.container.appendChild(this.renderer.domElement)

    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight)
    this.renderer.setPixelRatio(1)
    this.renderer.setScissorTest(true)
  }

  _render() {

  }
}