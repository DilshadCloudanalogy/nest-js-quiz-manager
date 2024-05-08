import { User } from '../../modules/user/user.entity';
import { Connection, getManager } from "typeorm";
import { Factory, Seeder,factory } from "typeorm-seeding";

export class UseCreateSeeds implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        await getManager().query('TRUNCATE users')
        await factory(User)().createMany(10);
    }
} 