import Vue from 'vue'
import chai from 'chai'

import Developer from '@/components/Developer'

const should = chai.should()

describe('Component: Developer', () => {
  beforeEach(() => {
    const Constructor = Vue.extend(Developer)

    this.vm = new Constructor({
      propsData: {
        avatar: 'https://picsum.photos/200/300',
        name: 'Rodolfo',
        company: 'tebeo',
        email: 'test@mail.com',
        gists: 'gits',
        login: 'test',
        repos: 'repos'
      }
    }).$mount()
  })

  describe('Validate properties', () => {
    describe('"avatar"', () => {
      it('should be required', () => {
        Developer.props.avatar.
      })
    })
  })
})
