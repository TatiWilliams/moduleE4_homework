class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    
    plugIn() {
        if (!this.isPlugged) {
            this.isPlugged = true;
            console.log(`${this.name} включен(а) в розетку.`);
        } else {
            console.log(`${this.name} уже включен(а) в розетку.`);
        }
    }

    
    unplug() {
        if (this.isPlugged) {
            this.isPlugged = false;
            console.log(`${this.name} выключен(а) из розетки.`);
        } else {
            console.log(`${this.name} уже выключен(а) из розетки.`);
        }
    }
}


class DeskLamp extends ElectricalAppliance {
    constructor(name, power, brightness) {
        super(name, power);
        this.brightness = brightness;
    }

    
    adjustBrightness(level) {
        this.brightness = level;
        console.log(`Яркость ${this.name} установлена на ${level}.`);
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
        super(name, power);
        this.brand = brand;
    }

    
    start() {
        if (this.isPlugged) {
            console.log(`${this.name} (${this.brand}) запущен.`);
        } else {
            console.log(`${this.name} (${this.brand}) не может быть запущен, так как не включен в розетку.`);
        }
    }
}


const deskLamp = new DeskLamp("Настольная лампа", 60, 50);
const computer = new Computer("Компьютер", 500, "Dell");


deskLamp.plugIn();
computer.plugIn();


deskLamp.adjustBrightness(75);


computer.start();

function calculateTotalPower(appliances) {
    return appliances.reduce((total, appliance) => {
        return total + (appliance.isPlugged ? appliance.power : 0);
    }, 0);
}

const totalPower = calculateTotalPower([deskLamp, computer]);
console.log(`Общая потребляемая мощность: ${totalPower} Вт.`);

deskLamp.unplug();
computer.unplug();