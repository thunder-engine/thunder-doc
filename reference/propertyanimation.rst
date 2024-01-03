.. _api_PropertyAnimation:

PropertyAnimation Class
=======================

Inherited: :doc:`VariantAnimation<api_VariantAnimation>`

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

+-----------------------------------+--------------------------------------------------------------------------------------------+
|       :ref:`Variant<api_Variant>` | :ref:`defaultValue<api_PropertyAnimation_defaultValue>` () const                           |
+-----------------------------------+--------------------------------------------------------------------------------------------+
|                              void | :ref:`setCurrentValue<api_PropertyAnimation_setCurrentValue>` (const Variant & value)      |
+-----------------------------------+--------------------------------------------------------------------------------------------+
|                              void | :ref:`setTarget<api_PropertyAnimation_setTarget>` (Object * object, const char * property) |
+-----------------------------------+--------------------------------------------------------------------------------------------+
|                              void | :ref:`setValid<api_PropertyAnimation_setValid>` (bool  valid)                              |
+-----------------------------------+--------------------------------------------------------------------------------------------+
| const :ref:`Object<api_Object>` * | :ref:`target<api_PropertyAnimation_target>` () const                                       |
+-----------------------------------+--------------------------------------------------------------------------------------------+
|                        const char | :ref:`targetProperty<api_PropertyAnimation_targetProperty>` () const                       |
+-----------------------------------+--------------------------------------------------------------------------------------------+



.. _api_PropertyAnimation_static:

Static Methods
--------------

None

.. _api_PropertyAnimation_methods:

Methods Description
-------------------

.. _api_PropertyAnimation_defaultValue:

 :ref:`Variant<api_Variant>` **PropertyAnimation::defaultValue** () const

Returns the default value of the animated property.

----

.. _api_PropertyAnimation_setCurrentValue:

 void **PropertyAnimation::setCurrentValue** (:ref:`Variant<api_Variant>` & *value*)

Reimplements: VariantAnimation::setCurrentValue(const Variant &value).

This is an overloaded function.

Sets the new current *value* for the animated Variant. And updates animated property of the object.

----

.. _api_PropertyAnimation_setTarget:

 void **PropertyAnimation::setTarget** (:ref:`Object<api_Object>` * *object*, char * *property*)

Sets the new animated *property* of the *object*.

**See also** target().

----

.. _api_PropertyAnimation_setValid:

 void **PropertyAnimation::setValid** (bool  *valid*)

Reimplements: Animation::setValid(bool *valid*).

This is an overloaded function.

Sets the *valid* state of animation. The invalid animations will not affect anything.

----

.. _api_PropertyAnimation_target:

const :ref:`Object<api_Object>`* **PropertyAnimation::target** () const

Returns the root object of the animated property.

**See also** setTarget().

----

.. _api_PropertyAnimation_targetProperty:

const char **PropertyAnimation::targetProperty** () const

Returns the name of animates property of the object.


