.. _api_PropertyAnimation:
PropertyAnimation Class
================

Inherited: :ref:`VariantAnimation<api_VariantAnimation>`

.. _api_PropertyAnimation_description:
Description
-----------

PropertyAnimation interpolates animated property between key-frames.

::

    PropertyAnimation anim;
    anim.setLoopDuration(1000);
    
    MyObject object;
    anim.setTarget(&object, "position");
    anim.setKeyFrames({ KeyFrame(0.0f, Vector2(0.0f, 0.0f)),
                        KeyFrame(1.0f, Vector2(1.0f, 2.0f)) });
    
    anim.start();



.. _api_PropertyAnimation_public:
Public Methods
--------------

+-----------------------------------------+--------------------------------------------------------------------------------------------+
|             :ref:`Variant<api_Variant>` | :ref:`defaultValue<api_PropertyAnimation_defaultValue>` () const                           |
+-----------------------------------------+--------------------------------------------------------------------------------------------+
|                   :ref:`void<api_void>` | :ref:`setCurrentValue<api_PropertyAnimation_setCurrentValue>` (const Variant & value)      |
+-----------------------------------------+--------------------------------------------------------------------------------------------+
|                   :ref:`void<api_void>` | :ref:`setTarget<api_PropertyAnimation_setTarget>` (Object * object, const char * property) |
+-----------------------------------------+--------------------------------------------------------------------------------------------+
|                   :ref:`void<api_void>` | :ref:`setValid<api_PropertyAnimation_setValid>` (bool  valid)                              |
+-----------------------------------------+--------------------------------------------------------------------------------------------+
| :ref:`const Object<api_const Object>` * | :ref:`target<api_PropertyAnimation_target>` () const                                       |
+-----------------------------------------+--------------------------------------------------------------------------------------------+
|     :ref:`const char<api_const char>` * | :ref:`targetProperty<api_PropertyAnimation_targetProperty>` () const                       |
+-----------------------------------------+--------------------------------------------------------------------------------------------+



.. _api_PropertyAnimation_static:
Static Methods
--------------

None

.. _api_PropertyAnimation_methods:
Methods Description
-------------------

.. _api_PropertyAnimation_defaultValue:

:ref:`Variant<api_Variant>`  **PropertyAnimation::defaultValue** () const

Returns the default value of the animated property.

----

.. _api_PropertyAnimation_setCurrentValue:

:ref:`void<api_void>`  **PropertyAnimation::setCurrentValue** (:ref:`Variant<api_Variant>` & *value*)

Reimplements: VariantAnimation::setCurrentValue(const Variant &value).

This is an overloaded function.

Sets the new current *value* for the animated Variant. And updates animated property of the object.

----

.. _api_PropertyAnimation_setTarget:

:ref:`void<api_void>`  **PropertyAnimation::setTarget** (:ref:`Object<api_Object>` * *object*, :ref:`char<api_char>` * *property*)

Sets the new animated *property* of the *object*.

**See also** target().

----

.. _api_PropertyAnimation_setValid:

:ref:`void<api_void>`  **PropertyAnimation::setValid** (:ref:`bool<api_bool>`  *valid*)

Reimplements: Animation::setValid(bool *valid*).

This is an overloaded function.

Sets the *valid* state of animation. The invalid animations will not affect anything.

----

.. _api_PropertyAnimation_target:

:ref:`const Object<api_const Object>` * **PropertyAnimation::target** () const

Returns the root object of the animated property.

**See also** setTarget().

----

.. _api_PropertyAnimation_targetProperty:

:ref:`const char<api_const char>` * **PropertyAnimation::targetProperty** () const

Returns the name of animates property of the object.

----


