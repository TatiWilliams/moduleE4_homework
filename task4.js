function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}


ElectricalAppliance.prototype.plugIn = function() {
    if (!this.isPlugged) {
        this.isPlugged = true;
        console.log(`${this.name} включен(а) в розетку.`);
    } else {
        console.log(`${this.name} уже включен(а) в розетку.`);
    }
};


ElectricalAppliance.prototype.unplug = function() {
    if (this.isPlugged) {
        this.isPlugged = false;
        console.log(`${this.name} выключен(а) из розетки.`);
    } else {
        console.log(`${this.name} уже выключен(а) из розетки.`);
    }
};


function DeskLamp(name, power, brightness) {
    ElectricalAppliance.call(this, name, power);
    this.brightness = brightness;
}


DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;


DeskLamp.prototype.adjustBrightness = function(level) {
    this.brightness = level;
    console.log(`Яркость ${this.name} установлена на ${level}.`);
};
function Computer(name, power, brand) {
    ElectricalAppliance.call(this, name, power);
    this.brand = brand;
}


Computer.prototype = Object.create(ElectricalAppliance.prototype);
Computer.prototype.constructor = Computer;


Computer.prototype.start = function() {
    if (this.isPlugged) {
        console.log(`${this.name} (${this.brand}) запущен.`);
    } else {
        console.log(`${this.name} (${this.brand}) не может быть запущен, так как не включен в розетку.`);
    }
};


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