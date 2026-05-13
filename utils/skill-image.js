import aws from '../app/assets/svg/skills/aws.svg';
import azure from '../app/assets/svg/skills/azure.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import bulma from '../app/assets/svg/skills/bulma.svg';
import canva from '../app/assets/svg/skills/canva.svg';
import css from '../app/assets/svg/skills/css.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import markdown from '../app/assets/svg/skills/markdown.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import nextJS from '../app/assets/svg/skills/nextJS.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import prisma from '../app/assets/svg/skills/prisma.svg';
import python from '../app/assets/svg/skills/python.svg';
import react from '../app/assets/svg/skills/react.svg';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import vitejs from '../app/assets/svg/skills/vitejs.svg';
import linux from '../app/assets/svg/skills/linux.svg'
import sqlite from '../app/assets/svg/skills/sqlite.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'js':
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'typescript':
      return typescript;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'sqlite':
      return sqlite;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'prisma':
      return prisma;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'git':
      return git;
    case 'azure':
      return azure;
    case 'markdown':
      return markdown;
    case 'canva':
      return canva;
    case 'linux':
      return linux;
    default:
      return null;
  }
}
