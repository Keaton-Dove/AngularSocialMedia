import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './functionality/models';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService implements InMemoryDbService {
  
  constructor(){}

  createDb() {
    return {
      users: [
        { id: 0, username: "admin", password: "admin", email: "admin@angularsocialmedia.com" },
        { id: 1, username: "keatonD", password: "seminar", email: "kdove8@capital.edu" }
      ],

      posts: [
        { id: 0,
          username: "admin",
          title: "Welcome to AngularSocialMedia", 
          body: "AngularSocialMedia is a revolutionary new social media platform!",
          datePosted: "3/12/2022"},
        { id: 1,
          username: "keatonD",
          title: "Medium post",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dolor dolor, posuere eu fringilla ac, volutpat sed nibh. Suspendisse iaculis ac magna et consequat. Curabitur ac dolor finibus, mattis urna et, euismod neque. Donec quis fermentum urna. Vestibulum porta, nunc non laoreet ornare, nisl ex fermentum ex, in ornare dui arcu a tellus. Etiam non lectus suscipit, accumsan mauris sed, finibus diam. Praesent blandit ut elit ut tempor. Proin in massa purus. Maecenas ullamcorper enim vitae pretium vestibulum. Donec lacus dolor, condimentum et lorem at, feugiat congue velit. Aenean elementum justo lacus, id porta nisl hendrerit hendrerit. Ut ultricies ut neque quis condimentum. Fusce nec felis massa. Aenean consectetur urna non eros scelerisque, vel accumsan nibh dignissim. Fusce et quam vestibulum, dapibus nisi vel, aliquam nulla.",
          datePosted: "3/12/2022"},
          
        { id: 2,
          username: "keatonD",
          title: "This is a long post",
          body: "Integer tincidunt pellentesque nisl, nec tristique tellus scelerisque ut. Sed erat velit, interdum nec mollis sed, sollicitudin et quam. Vivamus ex magna, mattis sed nisl non, accumsan semper turpis. Nam odio elit, ultrices sit amet facilisis vitae, semper vitae erat. Suspendisse potenti. Vivamus enim metus, tempus at ullamcorper quis, luctus in lorem. Nunc id augue ut felis elementum ullamcorper. Donec massa felis, posuere eu nisl vitae, mollis pharetra justo. Donec tincidunt nulla enim, eu aliquet lorem eleifend in. Aliquam eget malesuada sapien.\n\n\
          Etiam viverra, ante in vulputate egestas, nunc arcu maximus elit, interdum venenatis sem arcu quis est. Praesent at neque quis lorem sollicitudin rhoncus et nec libero. Nullam nec dui hendrerit, consectetur magna bibendum, euismod neque. Proin est enim, sodales in ante in, vulputate convallis orci. Phasellus ornare libero sed purus porttitor facilisis. Suspendisse mollis ultrices arcu id accumsan. Donec ut eros est\n\n\
          Donec euismod euismod ullamcorper. Vestibulum quis luctus erat. Curabitur metus libero, gravida a magna a, tincidunt fringilla sem. Aenean venenatis, purus in pretium congue, tortor lacus blandit nisi, ac luctus tellus velit vitae justo. Fusce libero dui, placerat a est et, eleifend lacinia ligula. Vestibulum non neque sed leo congue porta sed eu dolor. Morbi egestas vitae ex nec aliquam.\n\n\
          Vivamus mollis nisi et commodo auctor. Duis dignissim purus diam, et feugiat turpis pellentesque a. Ut nec lacinia lacus. Morbi fermentum purus metus, nec accumsan mi faucibus eget. Suspendisse lobortis eu dui sit amet gravida. Curabitur interdum rutrum facilisis. Praesent sit amet consequat nulla. Nunc ullamcorper risus lobortis massa placerat, quis commodo elit suscipit. Integer pulvinar, nisi et imperdiet scelerisque, nulla turpis pretium orci, in maximus eros risus id ligula. Donec fringilla lorem vel nibh euismod, vitae consequat nibh sollicitudin. Sed luctus vehicula orci, ut lobortis ex suscipit eu. Mauris tempus ligula ultricies libero lacinia facilisis. Integer urna sem, commodo et cursus eu, pretium vitae ipsum.",
          datePosted: "3/17/2022"}

      ]
    };
  }
}
