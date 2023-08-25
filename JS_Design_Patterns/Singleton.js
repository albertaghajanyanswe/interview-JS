class SingletonDBConnection {
    constructor(configs) {
        if (SingletonDBConnection.instance) {
            return SingletonDBConnection.instance;
        }
        this.dbConfigs = configs;
        SingletonDBConnection.instance = this;
    }
    
    static getInstance(configs) {
        if(!this.instance) {
            this.instance = new SingletonDBConnection(configs);
        }
        return this.instance;
    }
}

const i1 = SingletonDBConnection.getInstance({port: 3000, host: 'localhost'});
const i2 = SingletonDBConnection.getInstance({port: 4000, host: 'localhost'});
const i3 = new SingletonDBConnection({port: 5000, host: 'localhost'});
console.log('instance 1 = ', i1)
console.log('instance 2 = ', i2)
console.log('instance 3 = ', i3)
console.log(i1 === i2)
