.. _doc_native_introspection:

Native Introspection
====================

The introspection mechanism allows making Script bindings in transparent mode.
Unfortunately, not all programming languages provide it out of the box.
Thunder Engine uses a Meta Object approach to define a class structure to be able to retrieve this information on runtime.
To make properties visible in the Editor and in the Scripts the engine developers need to define a special construction inside a class body.

In the example below developer defines all required fields:

.. code-block:: c++

    #include <nativebehaviour.h>
    
    class MyComponent : public NativeBehaviour {
        A_REGISTER(MyComponent, NativeBehaviour, Components)
    
        A_PROPERTIES(
            A_PROPERTY(int, speed, MyComponent::speed, MyComponent::setSpeed)
        )
        A_METHODS(
            A_METHOD(void, MyComponent::jump)
        )
        
    public:
        int speed() const {
            return m_speed;
        }
    
        void setSpeed(int speed) {
            m_speed = speed;
        }
        
        void jump(int force) {
            // Do jump code here
        }
    
    private:
        int m_speed = 0;
    
    };

.. _doc_native_metaobject:

Meta Object
-----------

Thunder Engine Meta-object system provides runtime type information like methods, properties, signals, and slots for inter-object communication.

The meta-object system is based on two things:

* The Object class provides a base class for objects that can take advantage of the meta-object system.
* The A_REGISTER macro inside the private section of the class declaration is used to enable meta-object features, such as properties, signals, and slots.


.. _doc_native_properties:

Native Properties
-----------------
    
In the provided example developer specified an introspection definition of property *speed*.

.. code-block:: c++

    A_PROPERTIES (
        A_PROPERTY(int, speed, MyComponent::speed, MyComponent::setSpeed)
    )

Please find the description of parameters for A_PROPERTY bellow:

* *int* - The return type of the property
* *speed* - The name of the property that will be visible in the editor and in Scripts.
* *MyComponent::speed* - The getter function of the property.
* *MyComponent::setSpeed* - The setter function of the property.

.. note::
    In case of no any public properties provided in native component.
    It will be a good practice to set *A_NOPROPERTIES()* in the class body.
    This will help to escape issues in introspection in case inhiritance.

.. _doc_native_methods:

Native Methods
--------------

In scripts, the developer can use not only properties but also call some functions for the component.
In the example above, the developer has specified a *jump* method for introspection.

.. code-block:: c++

    A_METHODS(
        A_METHOD(void, MyComponent::jump)
    )
    
Please find the description of parameters for A_PROPERTY bellow:

* *void* - The return type of the method
* *MyComponent::jump* - The function which will be registered.

.. note::
    In case of no public properties provided in the native component.
    It will be a good practice to set *A_NOMETHODS()* in the class body.
    This will help to escape issues in introspection in the case of inheritance.

.. _doc_native_signals:

Native Signals and Slots
------------------------

In gameplay programming, if one object was changed, we often want another object will be notified.
Signals and slots are used for communication between objects.
The signals and slots are made possible by the Thunder introspection system.

.. code-block:: c++

    #include <nativebehaviour.h>

    class MyComponent : public NativeBehaviour {
        A_REGISTER(MyComponent, NativeBehaviour, Components)
		
        A_METHODS(
            A_SLOT(MyComponent::slot),
            A_SIGNAL(MyComponent::signal)
        )

    public:		
        void slot(int value) {
            // Make reaction on signal here
        }
		
        void signal(int value);

    };

To connect objects we will need to call the *connect* function.

For example:

.. code-block:: c++

    MyComponent component1;
    MyComponent component2;
	
    connect(&component1, _SIGNAL(signal(int)), &component2, _SLOT(slot(int)));
	
In this code we connect the signal from the object *component1* with a slot in object *component2*
This means when the signal of object *component1* will be emitted.
The slot of object *component2* will be called.

The connection has to follow a few rules:

* The signature of a signal must match the signature of the receiving slot.
* The signal can be connected to a signal to relay the event.

To emmit a signal we need to call:

.. code-block:: c++

	component1.emitSignal(_SIGNAL(signal(int)), 5); // 5 is a value of signal argument
	