import { EntityRepository, Repository } from "typeorm";
import { Commentary } from "../entities/Commentary";

@EntityRepository(Commentary)
export class CommentaryRepository extends Repository<Commentary>{
    
}