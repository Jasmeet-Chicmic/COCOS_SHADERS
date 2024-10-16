import { _decorator, Component, Material, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ThreeColorGradient')
export class ThreeColorGradient extends Component {
    @property({ type: Material })
    material: Material = null!;

    update(deltaTime: number) {
        this.material.setProperty('utime', performance.now() * 0.003);
    }
}

