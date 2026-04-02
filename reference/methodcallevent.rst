.. _api_MethodCallEvent:

MethodCallEvent
===============

Inherited: None

.. _api_MethodCallEvent_description:

Description
-----------



.. _api_MethodCallEvent_public:

Public Methods
--------------

+-------------------------------------+------------------------------------------------------+
| const :ref:`Variant<api_Variant>` * | :ref:`args<api_MethodCallEvent_57b4d0c9>` () const   |
+-------------------------------------+------------------------------------------------------+
|                             int32_t | :ref:`method<api_MethodCallEvent_0e763f8d>` () const |
+-------------------------------------+------------------------------------------------------+
|         :ref:`Object<api_Object>` * | :ref:`sender<api_MethodCallEvent_4d73f859>` () const |
+-------------------------------------+------------------------------------------------------+



.. _api_MethodCallEvent_static:

Static Methods
--------------

None

.. _api_MethodCallEvent_methods:

Methods Description
-------------------

.. _api_MethodCallEvent_57b4d0c9:

const :ref:`Variant<api_Variant>` * **MethodCallEvent::args** () const

Returns an arguments array for method invocation.

----

.. _api_MethodCallEvent_0e763f8d:

 int32_t **MethodCallEvent::method** () const

Returns an index of method.

----

.. _api_MethodCallEvent_4d73f859:

 :ref:`Object<api_Object>` * **MethodCallEvent::sender** () const

Returns the object that sent this event.


