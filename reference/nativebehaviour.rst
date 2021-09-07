.. _api_NativeBehaviour:
NativeBehaviour Class
================

Inherited: :ref:`Component<api_Component>`

.. _api_NativeBehaviour_description:
Description
-----------

All programmable game logic must be derived from NativeBehaviour class.

Example:

::

    class ExampleBehaviour : public NativeBehaviour {
        A_REGISTER(ExampleBehaviour, NativeBehaviour, General)
    
        A_NOMETHODS()
        A_NOPROPERTIES()
    
    public:
        void start() {
            Log(Log::DBG) << "Start";
        }
    
        void update() {
            Log(Log::DBG) << "Update";
        }
    };



.. _api_NativeBehaviour_public:
Public Methods
--------------

+-----------------------+----------------------------------------------+
| :ref:`void<api_void>` | :ref:`start<api_NativeBehaviour_start>` ()   |
+-----------------------+----------------------------------------------+
| :ref:`void<api_void>` | :ref:`update<api_NativeBehaviour_update>` () |
+-----------------------+----------------------------------------------+



.. _api_NativeBehaviour_static:
Static Methods
--------------

None

.. _api_NativeBehaviour_methods:
Methods Description
-------------------

.. _api_NativeBehaviour_start:

:ref:`void<api_void>`  **NativeBehaviour::start** ()

Start is called on the same frame when a script is enabled just before the update method will be called the first time.

----

.. _api_NativeBehaviour_update:

:ref:`void<api_void>`  **NativeBehaviour::update** ()

Update is called every frame, if the NativeBehaviour is enabled.

----


