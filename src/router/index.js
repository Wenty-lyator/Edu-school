import VueRouter from 'vue-router'

// большинство страниц импортированы вообще хаотично, почему? потому что у меня шизофрения
import MainPage from '../pages/MainPage'
import Tidings from '../pages/Tidings'
import CertificateFull from '../pages/CertificateFull'
import NotFound from '../pages/404'

import About from '../pages/About'
import Teachers from '../pages/Teachers'
import Education from '../pages/Education'
import Technique from '../pages/Technique'
import ExcellenFull from '../pages/ExcellenFull'
import JustEducation from '../pages/JustEducation'
import Process from '../pages/Process'
import Library from '../pages/Library'
import Psychology from '../pages/Psychology'
import Timetable from '../pages/Timetable'
import Useful from '../pages/Useful'
import ForParents from '../pages/ForParents'
import Shape from '../pages/Shape'
import Remotely from '../pages/Remotely'
import Board from '../pages/Board'
import Association from '../pages/Association'
import Acceptance from '../pages/Acceptance'
import Interest from '../pages/Interest'
import Parliament from '../pages/Parlament'
import Vidos from '../pages/Vidos'
import Expensive from '../pages/Expensive'
import Contacts from '../pages/Contacts'


export default new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/', //Главная
         name: 'main',
         component: MainPage
      },
      {
         path: '*', //не найдено
         name: 'notFound',
         component: NotFound
      },
      {
         path: '/news', //Новости
         name: 'tidings',
         component: Tidings
      },
      {
         path: '/excellens', //Гордимся
         name: 'excellens',
         component: ExcellenFull
      },
      {
         path: '/certificates', //сертификаты 
         name: 'certificat',
         component: CertificateFull
      },
      {
         path: '/about', //О нас
         name: 'about',
         component: About
      },
      {
         path: '/teachers', //Сотрудники
         name: 'teachers',
         component: Teachers
      },
      {
         path: '/education', //Учебно-воспитательная работа
         name: 'education',
         component: Education
      },
      {
         path: '/methods', //Методическая служба
         name: 'methods',
         component: Technique
      },
      {
         path: '/teaching', //Воспитательная работа не путать с Учебно-воспитательной
         name: 'educat-teach',
         component: JustEducation
      },
      {
         path: '/video-gallery', //Видеогаллерея
         name: 'videos',
         component: Vidos
      },
      {
         path: '/day-book', //дневник
         name: 'expensive',
         component: Expensive
      },
      {
         path: '/contacts', //контакты
         name: 'contacts',
         component: Contacts
      },
      {
         path: '/process', //Ученбный процесс
         name: 'process',
         component: Process
      },
      {
         path: '/library', //Информационно - библиотечная служба
         name: 'library',
         component: Library
      },
      {
         path: '/psychology', //Социально-психологическая служба
         name: 'psychology',
         component: Psychology
      },
      {
         path: '/timetable', //Расписание
         name: 'timetable',
         component: Timetable
      },
      {
         path: '/useful', //Полезная информация
         name: 'useful',
         component: Useful
      },
      {
         path: '/for-parents', //Информация для родителей
         name: 'for-parents',
         component: ForParents
      },
      {
         path: '/shape', //Школная форма
         name: 'shape',
         component: Shape
      },
      {
         path: '/schedule', //Дистанционное обучение
         name: 'schedule',
         component: Remotely
      },
      {
         path: '/board', //Попечительский совет
         name: 'board',
         component: Board
      },
      {
         path: '/association', //Общественное объединение
         name: 'association',
         component: Association
      },
      {
         path: '/acceptance', //О приёме в школу
         name: 'acceptance',
         component: Acceptance
      },
      {
         path: '/hobby-interest', //Кружки и секций
         name: 'interest',
         component: Interest
      },
      {
         path: '/school-parlament', //ШСУ
         name: 'parlament',
         component: Parliament
      }
   ]
})