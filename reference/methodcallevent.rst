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
| const :ref:`Variant<api_Variant>` * | :ref:`args<api_MethodCallEvent_f169da5c>` () const   |
+-------------------------------------+------------------------------------------------------+
|                             int32_t | :ref:`method<api_MethodCallEvent_56ec4d29>` () const |
+-------------------------------------+------------------------------------------------------+
|         :ref:`Object<api_Object>` * | :ref:`sender<api_MethodCallEvent_4ce3b061>` () const |
+-------------------------------------+------------------------------------------------------+



.. _api_MethodCallEvent_static:

Static Methods
--------------

None

.. _api_MethodCallEvent_methods:

Methods Description
-------------------

.. _api_MethodCallEvent_f169da5c:

const :ref:`Variant<api_Variant>` * **MethodCallEvent::args** () const

Returns an arguments array for method invocation.

----

.. _api_MethodCallEvent_56ec4d29:

 int32_t **MethodCallEvent::method** () const

Returns an index of method.

----

.. _api_MethodCallEvent_4ce3b061:

 :ref:`Object<api_Object>` * **MethodCallEvent::sender** () const

Returns the object that sent this event.


