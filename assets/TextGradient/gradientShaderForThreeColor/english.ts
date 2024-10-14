import { _decorator, Component, Material, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('english')
export class english extends Component {
    @property({ type: Material })
    material: Material = null!;
    start() {
        // Assuming you have a reference to the material
        // Scale time to suit your animation speed

    }

    update(deltaTime: number) {
        this.material.setProperty('utime', performance.now() * 0.003);
    }
}

