.. _api_MethodCallEvent:

MethodCallEvent
===============

Inherited: :ref:`Event<api_Event>`

.. _api_MethodCallEvent_description:

Description
-----------



.. _api_MethodCallEvent_public:

Public Methods
--------------

+-------------------------------------+------------------------------------------------------+
| const :ref:`Variant<api_Variant>` * | :ref:`args<api_MethodCallEvent_b21604fd>` () const   |
+-------------------------------------+------------------------------------------------------+
|                             int32_t | :ref:`method<api_MethodCallEvent_45ce0d9a>` () const |
+-------------------------------------+------------------------------------------------------+
|         :ref:`Object<api_Object>` * | :ref:`sender<api_MethodCallEvent_078a5db9>` () const |
+-------------------------------------+------------------------------------------------------+



.. _api_MethodCallEvent_static:

Static Methods
--------------

None

.. _api_MethodCallEvent_methods:

Methods Description
-------------------

.. _api_MethodCallEvent_b21604fd:

const :ref:`Variant<api_Variant>` * **MethodCallEvent::args** () const

Returns an arguments array for method invocation.

----

.. _api_MethodCallEvent_45ce0d9a:

 int32_t **MethodCallEvent::method** () const

Returns an index of method.

----

.. _api_MethodCallEvent_078a5db9:

 :ref:`Object<api_Object>` * **MethodCallEvent::sender** () const

Returns the object that sent this event.


