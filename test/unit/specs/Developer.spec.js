import Vue from 'vue'
import chai from 'chai'

import Developer from '@/components/Developer'

// const should = chai.should()

describe('Component: Developer', () => {
  beforeEach(function () {
    const Constructor = Vue.extend(Developer)

    this.vm = new Constructor({
      propsData: {
        avatar: 'https://picsum.photos/200/300',
        name: 'Rodolfo',
        company: 'tebeo',
        email: 'test@mail.com',
        gists: 5,
        login: 'rolfo',
        repos: 6
      }
    }).$mount()
  })

  describe('Validate properties', function () {

    describe('"avatar"', function () {
      it('should be required', function () {
        Developer.props.avatar.required.should.be.true
      })
    })

    describe('"avatar"', function () {
      it('should be string', function () {
        Developer.props.avatar.type.name.should.be.equal('String')
      })
    })
  })

  describe('After mount component', function () {
    describe('"should be mounted successfully"', function () {
      it('should be required', function () {
        this.vm.should.be.defined
      })

      it('should render correct contents', function(){
        const src = this.vm.$el.querySelector('.developer .developer__avatar img').src
        src.should.be.equal('https://picsum.photos/200/300')
      })
    })
  })
})
