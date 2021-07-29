import {
    ConflictException,
    InternalServerErrorException,
  } from '@nestjs/common';
  import { EntityRepository, Repository } from 'typeorm';
  import { AuthCredentialsDto } from '../auth/dto/auth-credentials.dto';
  import { ServiceProvider } from './serviceProvider.entity';
  import * as bcrypt from 'bcrypt';
import { SignUpDto } from 'src/auth/dto/auth-credentials-signup.dto';
  
  @EntityRepository(ServiceProvider)
  export class ServiceProviderRepository extends Repository<ServiceProvider> {
    
    async createServiceProvider(authCredentialsDto: SignUpDto): Promise<void> {
      const { email, password ,name} = authCredentialsDto;
  
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const sp = this.create({ name ,email, password: hashedPassword });
  
      try {
        await this.save(sp);
      } catch (error) {
        if (error.code === '23505') {
          // duplicate username

          throw new ConflictException('Service Provider already exists');
        } else {
          console.log(error)
          throw new InternalServerErrorException();
        }
      }
    }
  }
  