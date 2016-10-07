'use strict'

exports.handle = function handle(client) {

  const sayHello = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().helloSent)
    },

    prompt() {
      client.addResponse('app:response:name:welcome')
      client.addResponse('app:response:name:provide/documentation', {
        documentation_link: 'http://docs.init.ai',
      })
      client.addResponse('app:response:name:provide/instructions')
      client.updateConversationState({
        helloSent: true
      })
      client.done()
    }
  })

  const collectFromAddress = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().from_address)
    },

    prompt() {
      client.addResponse('app:response:name:prompt/from_address')
      client.done()
    }
  })

  const collectToAddress = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().to_address)
    },

    prompt() {
      client.addResponse('app:response:name:prompt/to-address')
      client.done()
    }
  })

  const collectDimensions = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().length && client.getConverationState().width && client.getConversationState().height)
    },

    prompt() {
      client.addResponse('app:response:name:prompt/dimensions')
      client.done()
    }
  })

  const collectWeight = client.createStep({
    satisfied() {
      return Boolean(client.getConversationState().weight)
    },

    prompt() {
      client.addResponse('app:response:name:prompt/weight')
      client.done()
    }
  })

  const provideShippingCost = client.createStep({
    satisfied() {
      return false
    },

    prompt() {
      client.addResponse('app:response:name:provide/shipping_cost')
      client.done()
    }
  })

  client.runFlow({
    classifications: {
			// map inbound message classifications to names of streams
    },
    streams: {
      main: 'onboarding',
      onboarding: [sayHello],
      getShippingCost: [collectFromAddress, collectToAddress, collectDimensions, collectWeight, provideShippingCost]
    }
  })
}
