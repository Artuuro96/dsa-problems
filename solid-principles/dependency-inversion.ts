// Abstraction (high-level module)
interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

// Low-level module 1
class LightBulb implements Switchable {
  turnOn(): void {
    console.log('LightBulb is on');
  }

  turnOff(): void {
    console.log('LightBulb is off');
  }
}

// Low-level module 2
class Fan implements Switchable {
  turnOn(): void {
    console.log('Fan is on');
  }

  turnOff(): void {
    console.log('Fan is off');
  }
}

// High-level module
class RemoteControl {
  constructor(private device: Switchable) {}

  operate(): void {
    this.device.turnOn();
    // Other high-level logic
    this.device.turnOff();
  }
}

const bulb = new LightBulb();
const remoteForBulb = new RemoteControl(bulb);
remoteForBulb.operate(); // Turn on the LightBulb

const fan = new Fan();
const remoteForFan = new RemoteControl(fan);
remoteForFan.operate(); // Turn on the Fan
